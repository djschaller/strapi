'use strict';

/**
 * sale-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sale-data.sale-data');
