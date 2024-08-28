import {Avatar, Card, Flex, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";

interface TypeSub {
    p:number
    h:number
    l:number
    dt:string
}

interface TypeMetalName {
    [key: string] : string,
}

interface TypeContract {
    mesghal : TypeSub,
    sekeb : TypeSub,
    nim : TypeSub,
    rob : TypeSub,
    geram18 : TypeSub,
    geram24 : TypeSub,
    sekee : TypeSub,
    gerami : TypeSub,
}
export const Metal = () => {
    const [loading, setLoading] = useState(true);

    const [currency, setCurrency] = useState<TypeContract>({
        mesghal : { p : 0, h : 0, l : 0,dt:''},
        sekeb : { p : 0, h : 0, l : 0,dt:''},
        nim : { p : 0, h : 0, l : 0,dt:''},
        rob : { p : 0, h : 0, l : 0,dt:''},
        geram18 : { p : 0, h : 0, l : 0,dt:''},
        geram24 : { p : 0, h : 0, l : 0,dt:''},
        sekee : { p : 0, h : 0, l : 0,dt:''},
        gerami : { p : 0, h : 0, l : 0,dt:''},
    })

    const currenciesList = ['sekeb', 'nim', 'rob','mesghal','geram18','geram24','sekee','gerami']

       const MetalName = (flag: string) => {
      return metalNameList[flag]
    }
    
   const metalNameList : TypeMetalName = {
        'mesghal':'مثقال طلا',
        'geram18':'طلای 18 عیار',
        'geram24':'طلای 24 عیار',
        'sekeb':'سکه بهار آزادی',
        'nim':'نیم سکه بهار آزادی',
        'rob':'ربع سکه بهار آزادی',
        'sekee':'سکه امامی',
        'gerami':'سکه گرمی',
    }

    const fetchData = async () => {
        currenciesList.map(async (value) => {
            await axios.get(`https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${value}/latest.json`).then(response => {
                return response
            }).then(async data => {
                setCurrency( prevState  => ({ ...prevState,   [value] : data.data }));
            }).finally(() => setLoading(false))
        })
    }

    const mIcon = (flag: string) => {
        if (flag === 'mesghal' || flag === 'geram18' || flag === 'geram24'){
            return "/assets/gold.png"
        }else {
            return  "/assets/coin.png"
        }
    }
   const metalList = ['mesghal', 'geram18', 'geram24',
        'sekeb','nim','rob','sekee','gerami']

    useEffect(() => {
            void fetchData()
            setInterval(fetchData, 250000)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
         <Flex className='justify-center' wrap="wrap" gap="small">
             {metalList.map((value : string, i) => (
                    <Card
                        key={i}
                        hoverable

                            // @ts-ignore
                        className={currency[value]?.dt === 'high' ? '!bg-green-200' : '!bg-red-200'}
                        style={{width: 250}}>
                                         <Skeleton loading={loading} avatar active>


                            <Flex gap={10} align={"center"}>
                                <Avatar src={mIcon(value)!} className='bg-gold bg-cover bg-center' />
                                <h2 className='font-bold'  key={`h2${i}`}>{MetalName(value)}</h2>
                            </Flex>
                        <Space className='mt-5' direction="vertical" size={10}>
                            <p className='font-bold'>{'نرخ روز ' +
                                // @ts-ignore
                                currency[value]?.p + ' ریال'}</p>
                            <p>{'بالاترین نرخ ' +
                                // @ts-ignore
                                currency[value]?.h + ' ریال'}</p>
                            <p>{'پایین ترین نرخ ' +
                                // @ts-ignore
                                currency[value]?.l + ' ریال'}</p>
                        </Space>
                      </Skeleton>
                    </Card>
                ))}
          </Flex>
    )
}