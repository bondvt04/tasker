import { Injectable, EventEmitter, Component } from 'angular2/angular2';
import { Channel, Item } from './RssService';

@Injectable()
export class ParserService {
    constructor() {}

    /** parse string with rss
     *
     * @param {str} str String with rss
     * @return {Channel} returns parsed Channel .
     * @static
     **/
    static getParsedChannel(str: String): Channel {

        if (!DOMParser) return null;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(str['_body'], "text/xml");
        var rss = xmlDoc.getElementsByTagName('rss')[0];
        var ch = rss.getElementsByTagName('channel')[0];

        var description = ch.getElementsByTagName('description')[0].childNodes[0].nodeValue;
        var pubDate = ch.getElementsByTagName('pubDate')[0].childNodes[0].nodeValue;
        var itemsList: NodeList = ch.getElementsByTagName('item');

        var channel = new Channel();
        channel.title = ParserService.getValue(ch.getElementsByTagName('title'));
        channel.link = ParserService.getValue(ch.getElementsByTagName('link'));
        channel.description = description;
        channel.pubDate = pubDate;

        //convert Nodelist to Array<Element>
        var items: Array<Element> = Array.prototype.slice.call(itemsList);

        for (var i = 0; i < items.length; ++i) {
            var item = items[i];
            var title: string = item.getElementsByTagName('title')[0].childNodes[0].nodeValue;
            var link: string = item.getElementsByTagName('link')[0].childNodes[0].nodeValue;
            var description: string = item.getElementsByTagName('description')[0].childNodes[0].nodeValue;
            var pubDate: string = item.getElementsByTagName('pubDate')[0].childNodes[0].nodeValue;


            var image: string = null;

            //remove tags from description
            var mydiv = document.createElement("div");
            mydiv.innerHTML = description;
            description = mydiv.textContent;

            var channelItem = new Item();
            channelItem.title = title;
            channelItem.link = link;
            channelItem.description = description;
            channelItem.pubDate = moment(Date.parse(pubDate)).fromNow();

           for (var j = 0; j < item.childNodes.length ; j++) {
               let node : Node = item.childNodes.item(j);
               switch (item.childNodes.item(j).nodeName) {
                   //parse like on cnn
                   case 'media:content' :
                       channelItem.image = node.attributes.getNamedItem('url').value;
                       break;
                   //parse like korr
                   case 'image' :
                       var imgnode = parser.parseFromString( node.firstChild.nodeValue, "text/xml" );
                       channelItem.image = imgnode.firstChild.attributes['src'].value ;
                       break;
               }
            }

            channel.items.push(channelItem);
        }
        return channel;
    }

    static getValue(list: NodeList): string {
        var itemsArray: Array<Element> = Array.prototype.slice.call(list);
        for (var i = 0; i < itemsArray.length; ++i) {
            var item = itemsArray[i].childNodes[0];
            if (item) return item.nodeValue;
        }
        return null;
    }
}

