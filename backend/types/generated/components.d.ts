import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHomeHighlight extends Struct.ComponentSchema {
  collectionName: 'components_homepage_home_highlights';
  info: {
    displayName: 'homeHighlight';
    icon: 'crown';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface HomepageLeistungen extends Struct.ComponentSchema {
  collectionName: 'components_homepage_leistungens';
  info: {
    displayName: 'leistungen';
    icon: 'briefcase';
  };
  attributes: {
    bild: Schema.Attribute.Media<'images' | 'files'>;
    icon: Schema.Attribute.Media<'files' | 'images'>;
    name: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface HomepageSocials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_socials';
  info: {
    displayName: 'socials';
    icon: 'discuss';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
  };
}

export interface HomepageTeam extends Struct.ComponentSchema {
  collectionName: 'components_homepage_teams';
  info: {
    displayName: 'team';
    icon: 'user';
  };
  attributes: {
    bild: Schema.Attribute.Media<'images' | 'files'>;
    bio: Schema.Attribute.Text;
    funktion: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface KarriereHighglights extends Struct.ComponentSchema {
  collectionName: 'components_karriere_highglights';
  info: {
    displayName: 'highglights';
    icon: 'crown';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface KarriereWirbieten extends Struct.ComponentSchema {
  collectionName: 'components_karriere_wirbietens';
  info: {
    displayName: 'wirbieten';
    icon: 'gift';
  };
  attributes: {
    beschreibung: Schema.Attribute.Text;
    titel: Schema.Attribute.String;
  };
}

export interface KarriereWirerwarten extends Struct.ComponentSchema {
  collectionName: 'components_karriere_wirerwartens';
  info: {
    displayName: 'wirerwarten';
    icon: 'gate';
  };
  attributes: {
    beschreibung: Schema.Attribute.Text;
    titel: Schema.Attribute.String;
  };
}

export interface MenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'links';
    icon: 'oneToOne';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.home-highlight': HomepageHomeHighlight;
      'homepage.leistungen': HomepageLeistungen;
      'homepage.socials': HomepageSocials;
      'homepage.team': HomepageTeam;
      'karriere.highglights': KarriereHighglights;
      'karriere.wirbieten': KarriereWirbieten;
      'karriere.wirerwarten': KarriereWirerwarten;
      'menu.links': MenuLinks;
    }
  }
}
