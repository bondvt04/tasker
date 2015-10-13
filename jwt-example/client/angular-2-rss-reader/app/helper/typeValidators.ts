import {} from 'angular2/angular2';

export class TypeValidators {
/*	static tel(control: ng.Control) {
		if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
			return { tel: true }
		}
	}
	static email(control: ng.Control) {
		if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
			return { email: true }
		}
	}*/

	/**
	 * validating url
	 * @param control
	 * @returns {Object} - null(valid),  url: true(not valid)
	 */
	static url( control: ng.Control ): Object {
		var regExp: RegExp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
		//IMPORTANT !!?? : null - valid, { email: true } - not valid
		return (regExp.test(control.value)) ? null : { url: true };
	}
}