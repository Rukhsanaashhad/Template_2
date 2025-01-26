import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug"
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),  
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "discount",
            title: "Discount Percentage",
            type: "number",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
          }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
          }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of:[{
                type: "string"
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
          }),
          defineField({
            name: 'features',
            title: 'Features',
            type: 'object',
            fields: [
                { name: 'features', title: 'Features' , type: 'string' },
                { name: 'made', title: 'Made', type: 'string' },
                { name: 'quality', title: 'Quality', type: 'string' },
              ],
              description: 'Features of the product',
          }),
          defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              { name: 'height', title: 'Height', type: 'string' },
              { name: 'width', title: 'Width', type: 'string' },
              { name: 'depth', title: 'Depth', type: 'string' },
            ],
            description: 'Dimensions of the product',
          }),
          defineField({
            name:'variant',
            title: 'Product Type',
            type: 'string',
            options:{
                list: [
                    {title:"Crockory" , value: "crockory"},
                    {title:"Chairs", value: "chairs"},
                    {title:"Plant Pots", value: "plant pots"},
                    {title:"Tableware", value: "tableware"},
                    {title:"Ceramics", value: "ceramics"},
                    {title:"Cutlery", value: "cutlery"},
                    {title:"Features", value: "features"},
                    {title:"Tables", value: "tables"}
                                        
                                            

                ],
            },
        }),
    ]
})