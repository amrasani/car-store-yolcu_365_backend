import type { Schema, Struct } from '@strapi/strapi';

export interface CarDetailsCarDetailField extends Struct.ComponentSchema {
  collectionName: 'components_car_details_car_detail_fields';
  info: {
    displayName: 'CarDetailField';
  };
  attributes: {
    icon_class: Schema.Attribute.String;
    lable: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLinks';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'car-details.car-detail-field': CarDetailsCarDetailField;
      'shared.social-links': SharedSocialLinks;
    }
  }
}
