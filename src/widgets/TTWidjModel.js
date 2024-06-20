//import * as commonUtils from '@topomat/maps/_maps/utils/commonUtils';
//import * as domUtils from '@topomat/maps/_maps/utils/domUtils';
import Widget from '@topomat/maps/_maps/widgets/_base/Widget';
import styleSheet from './TTWidjModel.css?inline';
import htmlTemplate from './TTWidjModel.html?raw';

export default class extends Widget {
    i18n = { //Strings % locales, ne pas mettre de code HTML, ça fait planter les traductions de attributs "title"
        en: {
            title: 'widget:EN',
        },
        fr: {
            title: 'widget:FR',
        },
        de: {
            title: 'widget:DE',
        }
    };

    type = 'TTWidjModel';

    declaredClass = '_maps.widgets.__template.TTWidjModel';

    iconClass = 'beaker';

    //_viewTypeSupport = { '2d': true, '3d': true }; //à supprimer si supporte les 2 modes

    //_requiresAuthentication = true;

    //_requiredPrivileges = 'portal:user:createItem';

    constructor(params, container, position) {
        //VERIFIER fonctionnement 3d, langues, responsiveness

        super();
        super.init(params, container, position);

        // evt permettant de gérer message pour type de vue non supporté, à laisser dans le constructeur, la méthode render n'étant pas appelée si le type de vue n'est pas supporté
        //this.on('view-type-support', (supportsView) => {
        //    if (!supportsView && !this._unsupViewMessage) {
        //        this._unsupViewMessage = commonUtils.showNotice({
        //            title: this._t9n.unsupportedViewType,
        //           kind: 'warning',
        //            icon: 'circle-disallowed',
        //            message: this._t9n.unsupportedViewTypeMessage,
        //            container: this.domNode.parentNode,
        //        });
        //    } else {
        //        domUtils.destroy(this._unsupViewMessage);
        //        this._unsupViewMessage = null;
        //    }
        //});

        // evt permettant de gérer message pour authentification et provileges
        //this.on('authenticated', (authenticated) => {
        //    if (!authenticated && !this._authenticatedMessage) {
        //        this._authenticatedMessage = commonUtils.showNotice({
        //            title: this._t9n.notAuthenticated,
        //            kind: 'warning',
        //            icon: 'circle-disallowed',
        //            message: this._t9n.notAuthenticatedMessage,
        //            container: this.domNode.parentNode,
        //        });
        //    } else {
        //        domUtils.destroy(this.notAuthenticated);
        //        this.notAuthenticated = null;
        //    }
        //});
        //this.icon => retourne un objet DOM avec l'icone (soit un calcite-icon, soit un span class=esri-icon)
        //LOCALES/TRADUCTION
        //this._i18n.key => retourne string this.i18n[locale].key (à utiliser dans l'attribut "title" ex: <div title=" + this._i18n.title + ">)
        //this._t9n.key => retourne un tag <t9n widgetid='_idDeLaWidget' key='key'>string</t9n> => traduction de la valeur au changement de locale
    }

    async _render() {
        this.addStyleSheet(this.type, styleSheet);
        this.domNode.innerHTML = htmlTemplate.trim();
        this._setEvents(); //convention qu'on s'y retrouve
        return this;
    }

    _setEvents() {
        // this.on('locale-change', (localeInfo) => {
        //     localeInfo.fromLocale;
        //     localeInfo.toLocale;
        // });
        // this.on('view-change',(viewInfo)=>{
        //     viewInfo.fromView;
        //     viewInfo.toView;
        // });
        //this.on('activate',()=>{})
        //this.on('deactivate',()=>{})
        //this.on('resize',()=>{})
    }
}
