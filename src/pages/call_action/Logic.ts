import React from "react";
import { API } from "../../server/endpoint";

const Index = () => {
    const [datas, setDatas] = React.useState<any>([]);
    const [data, setData] = React.useState<any>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const getCta = async () => {
        setLoading(true);
        const { data, error } = await API.service('CallToAction').find();

        if(data){
            setDatas(data);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }

    const getCtaByName = async (name: any) => {
        setLoading(true);
        const { data, error } = await API.service('CallToAction').find({
            where: { name: name },
          })

        if(data){
            setData({...data[0]})
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }

    const updateCtaByID = async (id: any, formData: any) => {
        setLoading(true);
        const { data, error } = await API.service('CallToAction').updateById(id, {
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

    React.useEffect(() => {
        let mount = true;

        if (mount) {
            getCta();
        }

        return () => {
            mount = false;
        };
    }, []);

    return {
        datas,
        loading,
        getCtaByName,
        updateCtaByID,
        data,
        setLoading,
    };
};
export default Index;
