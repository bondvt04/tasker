import { Injectable, EventEmitter, Component } from 'angular2/angular2';
import { Http, Headers } from 'angular2/http';
import { ParserService } from './ParserService';
import { AuthService } from './AuthService';
import { ConnectionService } from './ConnectionService';
import { LocalStorage } from '../helper/LocalStorage';

@Injectable()
export class RssService {
    private channelsList: Array<any>;
    private http: Http;
    private auth: AuthService;
    private connect: ConnectionService;

    constructor(http: Http, auth: AuthService, connect: ConnectionService) {
        this.auth = auth;
        this.http = http;
        this.connect = connect;

        if(this.auth.isAuth()) {
            this.loadChannels();
        }
     }

    /**
     * @desc load channel list
     * @returns {Promise|Promise<T>}
     */
    public loadChannels(): Promise<any> {
        var header: Headers = new Headers();
        header.append('Authorization', LocalStorage.token);
        this.channelsList = [];
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['get'](this.auth.baseApi + '/api/channels',
                    {
                        headers: header
                    })
                    .toRx()
                    .map(res => res.json())
                    .subscribe(res => {
                        this.channelsList = res;
                        resolve(res);
                    }
                );
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
     }

    public addChannel(link:string, name: string): Promise<any> {
        var header: Headers = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        header.append('Authorization', LocalStorage.token);
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['post'](this.auth.baseApi + '/api/channels',
                    this.auth.serialize({name: name, link: link}),
                    {
                        headers: header
                    })
                    .toRx()
                    .map(res => res.json())
                    .subscribe(res => {
                        (!!res.success) ? resolve(res.message) : reject(res.message);
                    }
                );
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
    }

    public removeChannel(id: string): Promise<any> {
        var header: Headers = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        header.append('Authorization', LocalStorage.token);
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['delete'](this.auth.baseApi + '/api/channels/' + id,
                    {
                        headers: header
                    })
                    .toRx()
                    .map(res => res.json())
                    .subscribe(res => {
                        (!!res.success) ? resolve(res.message) : reject(res.message);
                    }
                );
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
    }

    /**
     *@desc return Promise with object channel
     *@param id {String} - channel id
    **/
    public getChannelById(id:String): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.loadChannels().then(resp => {
                var objById: Object = resp.find(x => x._id === id);
                (!!objById) ? resolve(objById) : reject('Can\'t find channel with id #'+id);
            });
        });
    }

    /**
     *@desc load all channels feed and return promise
     **/
    public loadAllChannelsData(arr: Array<Object>): Promise<any> {
        var itemPromises = arr.map( resp => {
           return this.loadChannelData(resp['link']).then( resp => {
               return resp.items;
           })
           .catch( () => {
               return null;
           })
        });
        return Promise.all(itemPromises)
            .then(function(results) {
                //concatenate all arrays
                var arr = [].concat.apply([], results);
                var allFeed: Channel = new Channel();
                allFeed.items = arr;
                return allFeed;
            })
            .catch((err) => {
                console.log("Failed:", err);
                return null;
            });
    }

    /**
     * @descLoad url and return parsed channel
     * @param link {string} url
     * @returns {Promise|Promise<T>}
     */
    public loadChannelData(link: String): Promise<Channel> {
        var header: Headers = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['get'](String(link),
                    {
                        headers: header
                    })
                    .toRx()
                    .subscribe(res => {
                        var parsedChannel:Channel = ParserService.getParsedChannel(res);
                        (!!parsedChannel) ? resolve(parsedChannel) : reject(parsedChannel);
                    })
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
    }
}

export class Item {
    public name: String;
    public title: String;
    public id: String;
    public link: String;
    public description: String;
    public pubDate: String;
    public image: String;
}

export class Channel extends Item {
    items: Array<any>;
    constructor(){
        super();
        this.name = 'Channel';
        this.title = 'Channel';
        this.id = null;
        this.link = null;
        this.description = null;
        this.pubDate = 'no date';
        this.image = null;
        this.items = [];
    }
}
