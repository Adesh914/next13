import Product from "../models/product";
import Bpa from "../models/bpa-model";
const prepare = (o) => {
    console.log(o)
    // o._id = o._id.toString()
    // return o
}
const productResolver = {
    /*   BpaMst: {
          __resolveReference(data) {
              console.log("Host:")
              return { data }; // returns "Host" or "Guest"
          },
      }, */
    /*    BPA: {
           __resolveType: (rt) => {
               console.log("__resolverType:", rt)
               return { rt }
           }
       }, */
    Product: {
        bpamst: async (productData) => {
            const List = await Bpa.find({});
            const BN = List.filter((list) => {
                if (list.id.toString() === productData.name.toString()) {
                    return list.BpaName
                }
            });
            return BN;
        }
    },
    BpaMst: {

    },
    Query: {
        //Products
        getProducts: async (_, args) => {
            const { limit, page, q, productionCapacity } = args;

            try {
                var products = [];

                if (limit) {


                    const param = q ? { "name": new RegExp(`${q}`, "i") } : {};
                    console.log('args q:', param)
                    products = await Product.find(param)
                        .skip(limit * (page - 1))
                        .limit(limit);
                } else {
                    const param1 = {};
                    q ? param1["name"] = new RegExp(`${q}`, "i") : ``;
                    productionCapacity ? param1["productionCapacity"] = productionCapacity : ``;
                    console.log(param1)
                    products = await Product.find(param1);
                }

                /* .sort( { _id: 1 } )
                .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                .limit( nPerPage ); */

                // console.log('total Records:', products)

                return products;
            }
            catch (err) {
                console.log(err)
            }
        },
        productDataSet: async (_, args) => {
            const { q } = args;
            // const products = await Product.find({}).limit(limit);
            // /{ name: { $regex: '.*' + q + '.*' } }
            const param = q ? { "name": new RegExp(`${q} `, "i") } : ``;
            console.log('args q count:', param)
            const numRows = await Product.count(param);

            // console.log('total Records:', ...products)
            return [{ "NumRows": numRows }]
        },
        getProduct: async (_, { id }) => {
            const product = await Product.findById(id);
            console.log("Product Row:", product);
            if (!product) {
                throw new Error('Product not found.');
            }
            return product;
        },
        BpaProduct: async () => {
            return await Product.find({});
            // return [{ id: 1, name: "product 1", BpaMst: { BpaName: "product bpa" } }];
        },
        dropDown: async (_, { qty }) => {
            const obj = qty ? { "productionCapacity": qty } : {}
            return await Product.find(obj);
        }
    },





    Mutation: {
        // products
        newProduct: async (_, { input }) => {
            try {
                console.log("newProduct:", input)
                // const product = new Product(input);

                // const result = await product.save();

                // return result;
            } catch (err) {
                console.log(err)
            }
        },
        updateProduct: async (_, { id, input }) => {

            let product = await Product.findById(id);

            if (!product) {
                throw new Error('Product not found.')
            }

            product = await Product.findByIdAndUpdate({ _id: id }, input, {
                new: true
            })

            return product;
        },
        deleteProduct: async (_, { id }) => {
            const product = await Product.findById(id);

            if (!product) {
                throw new Error('Product not found')
            }
            await findOneDelete({ _id, id });

            return 'Proudct Deleted';
        },
    },
}


module.exports = productResolver