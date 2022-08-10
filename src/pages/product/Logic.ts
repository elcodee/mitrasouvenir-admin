import React from "react";
import { API } from "../../server/endpoint";

const Index = () => {
  const [datas, setDatas] = React.useState<any>([]);
  const [cat, setCat] = React.useState<any>([]);
  const [data, setData] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(false);

  const getCategory = async () => {
    setLoading(true);
    const { data, error } = await API.service("Category").find();

    if (data) {
      setCat(data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    const { data, error } = await API.service("Products").find({
      lookup: "*",
      sort: { _id: -1 },
    });

    if (data) {
      let arr: any = [];
      data.map((item) => {
        const obj = {
          ...item,
          prod_thumb: item.prod_thumb[0].url,
          prod_img1: item.prod_img1[0].url,
          prod_img2: item.prod_img1[0].url,
          prod_img3: item.prod_img1[0].url,
        };

        arr.push(obj);
      });
      setDatas(arr);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  const getProductByCode = async (code: any) => {
    setLoading(true);
    const { data, error } = await API.service("Products").find({
      where: { prod_code: code },
      lookup: "*",
    });

    if (data) {
      const obj = {
        ...data[0],
        prod_category: data[0].prod_category[0],
        prod_thumb: data[0].prod_thumb[0].url,
        prod_img1: data[0].prod_img1[0].url,
        prod_img2: data[0].prod_img1[0].url,
        prod_img3: data[0].prod_img1[0].url,
      };

      setData(obj);
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      return obj;
    }
  };

  const createProduct = async (formData: any) => {
    setLoading(true);
    console.log("FORM DATA : ", formData);

    // upload File
    const thumb = formData.prod_thumb;
    const img1 = formData.prod_img1;
    const img2 = formData.prod_img2;
    const img3 = formData.prod_img3;
    let res1: any = await API.storage.upload(thumb);
    let res2: any = await API.storage.upload(img1);
    let res3: any = await API.storage.upload(img2);
    let res4: any = await API.storage.upload(img3);

    if (res1.data.url && res2.data.url && res3.data.url && res4.data.url) {
      const { data, error } = await API.service("Products").create({
        prod_name: formData.prod_name,
        prod_code: formData.prod_code,
        prod_price: formData.prod_price,
        prod_stock: formData.prod_stock,
        prod_see: parseInt(formData.prod_see),
        prod_sell: parseInt(formData.prod_sell),
        prod_shopee: formData.prod_shopee,
        prod_tokopedia: formData.prod_tokopedia,
        prod_category: [formData.prod_category],
        prod_desc: formData.prod_desc,
        prod_thumb: [{ url: res1.data.url, fileName: res1.data.fileName }],
        prod_img1: [{ url: res2.data.url, fileName: res2.data.fileName}],
        prod_img2: [{ url: res3.data.url, fileName: res3.data.fileName}],
        prod_img3: [{ url: res4.data.url, fileName: res4.data.fileName}],
      });

      if(data){
        setTimeout(() => {
            setLoading(false);
          }, 1500);
        //   console.log("RES PROD : ", data);
          console.log("RES PROD ERR : ", error);
          return data;
      }

    } else {
    console.log("GAGAL");
    }
  };

  const updateCategoryByID = async (id: any, formData: any) => {
    setLoading(true);
    const { data, error } = await API.service("Category").updateById(id, {
      ...formData,
    });

    if (data) {
      setData({ ...data[0] });
      setTimeout(() => {
        setLoading(false);
      }, 1500);

      return data;
    }
  };

  const deleteProductByID = async (id: any) => {
    setLoading(true);
    const { data, error } = await API.service("Products").deleteById(id);

    if (data) {
    //   setData({ ...data[0] });
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      getProducts();
      return data;
    }
  };

  React.useEffect(() => {
    let mount = true;

    if (mount) {
      getCategory();
      getProducts();
    }

    return () => {
      mount = false;
    };
  }, []);

  return {
    cat,
    datas,
    data,
    setLoading,
    loading,
    getProductByCode,
    createProduct,
    updateCategoryByID,
    deleteProductByID,
  };
};
export default Index;
