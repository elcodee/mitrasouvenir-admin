import React from "react";
import { API } from "../../server/endpoint";

const Index = () => {
    const [datas, setDatas] = React.useState<any>([]);
    const [data, setData] = React.useState<any>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const getCategory = async () => {        
        setLoading(true);
        const { data, error } = await API.service('Category').find();

        if(data){
            setDatas(data);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }

    const getCategoryByName = async (name: any) => {
        setLoading(true);
        const { data, error } = await API.service('Category').find({
            where: { name: name },
          })

        if(data){
            setData({...data[0]})
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }

    const createCategory = async (name: any) => {
        setLoading(true);
        const { data, error } = await API.service('Category').create({
            ...name
          })

        if(data){
            setData({...data[0]})
            setTimeout(() => {
                setLoading(false);
            }, 1500);

            return data;
        }
    }

    const updateCategoryByID = async (id: any, formData: any) => {
        setLoading(true);
        const { data, error } = await API.service('Category').updateById(id, {
            ...formData
          })

        if(data){
            setData({...data[0]})
            setTimeout(() => {
                setLoading(false);
            }, 1500);

            return data;
        }
    }

    const deleteCategoryByID = async (id: any) => {
        setLoading(true);
        const { data, error } = await API.service('Category').deleteById(id)

        if(data){
            setData({...data[0]})
            setTimeout(() => {
                setLoading(false);
            }, 1500);
            getCategory();
            return data;
        }
    }

    React.useEffect(() => {
        let mount = true;

        if (mount) {
            getCategory();
        }

        return () => {
            mount = false;
        };
    }, []);

    return {
        datas,
        data,
        setLoading,
        loading,
        getCategoryByName,
        createCategory,
        updateCategoryByID,
        deleteCategoryByID,
    };
};
export default Index;
