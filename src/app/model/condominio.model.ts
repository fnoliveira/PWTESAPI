import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Condominio
{
    id: string;
    name: string;
    handle: string;
    description: string;
    categories: string[];
    tags: string[];
    images: {
        default: boolean,
        id: string,
        url: string,
        type: string
    }[];
    priceTaxExcl: number;
    priceTaxIncl: number;
    taxRate: number;
    comparedPrice: number;
    quantity: number;
    sku: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
    extraShippingFee: number;
    active: boolean;

    constructor(condominio?)
    {
        condominio = condominio || {};
        this.id = condominio.id || FuseUtils.generateGUID();
        this.name = condominio.name || '';
        this.handle = condominio.handle || FuseUtils.handleize(this.name);
        this.description = condominio.description || '';
        this.categories = condominio.categories || [];
        this.tags = condominio.tags || [];
        this.images = condominio.images || [];
        this.priceTaxExcl = condominio.priceTaxExcl || 0;
        this.priceTaxIncl = condominio.priceTaxIncl || 0;
        this.taxRate = condominio.taxRate || 0;
        this.comparedPrice = condominio.comparedPrice || 0;
        this.quantity = condominio.quantity || 0;
        this.sku = condominio.sku || 0;
        this.width = condominio.width || 0;
        this.height = condominio.height || 0;
        this.depth = condominio.depth || 0;
        this.weight = condominio.weight || 0;
        this.extraShippingFee = condominio.extraShippingFee || 0;
        this.active = condominio.active || true;
    }

    addCategory(event: MatChipInputEvent): void
    {
        const input = event.input;
        const value = event.value;

        // Add category
        if ( value )
        {
            this.categories.push(value);
        }

        // Reset the input value
        if ( input )
        {
            input.value = '';
        }
    }

    removeCategory(category)
    {
        const index = this.categories.indexOf(category);

        if ( index >= 0 )
        {
            this.categories.splice(index, 1);
        }
    }

    addTag(event: MatChipInputEvent): void
    {
        const input = event.input;
        const value = event.value;

        // Add tag
        if ( value )
        {
            this.tags.push(value);
        }

        // Reset the input value
        if ( input )
        {
            input.value = '';
        }
    }

    removeTag(tag)
    {
        const index = this.tags.indexOf(tag);

        if ( index >= 0 )
        {
            this.tags.splice(index, 1);
        }
    }
}
