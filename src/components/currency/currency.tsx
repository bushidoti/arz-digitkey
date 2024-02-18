import {Avatar, Card, Flex, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
const { Meta } = Card;
interface TypeContract {
    USD : {
        p:number
        h:number
        l:number
        dt:string
    },
    EUR : {
        p:number
        h:number
        l:number
        dt:string
    },
    GBP : {
        p:number
        h:number
        l:number
        dt:string

    },
    TR : {
        p:number
        h:number
        l:number
        dt:string

    }
}
export const Currency = () => {
    const [loading, setLoading] = useState(true);

    const [currency, setCurrency] = useState<TypeContract>({
        USD : { p : 0, h : 0, l : 0,dt:''},
        EUR : { p : 0, h : 0, l : 0,dt:''},
        TR : { p : 0, h : 0, l : 0,dt:''},
        GBP : { p : 0, h : 0, l : 0,dt:''}
    })
    const currenciesList = ['price_dollar_rl', 'price_eur', 'price_gbp','price_try']

    const fetchData = async () => {
        currenciesList.map(async (value) => {
            await axios.get(`https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${value}/latest.json`).then(response => {
                return response
            }).then(async data => {
                if (value === 'price_dollar_rl'){
                  setCurrency( prevState  => ({ ...prevState,   USD : data.data }));
                }else if (value === 'price_eur'){
                  setCurrency( prevState  => ({ ...prevState,   EUR : data.data }));
                }else if (value === 'price_gbp'){
                  setCurrency( prevState  => ({ ...prevState,   GBP : data.data }));
                }else if (value === 'price_try'){
                  setCurrency( prevState  => ({ ...prevState,   TR : data.data }));
                }
            }).finally(() => setLoading(false))
        })
    }

    useEffect(() => {
            void fetchData()
            setInterval(fetchData, 250000)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
         <Flex className='justify-center' wrap="wrap" gap="small">
              <Card
                hoverable
                loading={loading}
                className={currency.USD.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar className='bg-us bg-cover' />} title='دلار'/>
                   <Space className='mt-5' direction="vertical" size={10} >
                    <Meta className='font-bold' description={'نرخ روز ' + currency.USD.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.USD.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.USD.l + ' ریال'}/>
                  </Space>
                </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.EUR.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                    <Meta avatar={<Avatar className='bg-eu bg-cover bg-center' />} title='یورو'/>
                      <Space className='mt-5' direction="vertical" size={10} >
                        <Meta description={'نرخ روز ' + currency.EUR.p + ' ریال'}/>
                        <Meta description={'بالاترین نرخ ' + currency.EUR.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.EUR.l + ' ریال'}/>
                      </Space>
                </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.GBP.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
               <Skeleton loading={loading} avatar active>
                <Meta avatar={<Avatar className='bg-uk bg-cover bg-center' />} title='پوند'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.GBP.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.GBP.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.GBP.l + ' ریال'}/>
                  </Space>
               </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.TR.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
               <Skeleton loading={loading} avatar active>
                    <Meta avatar={<Avatar className='bg-tr bg-cover' />} title='لیر ترکیه'/>
                    <Space className='mt-5' direction="vertical" size={10} >
                        <Meta description={<p>نرخ روز   {currency.TR.p}   ریال</p>}/>
                        <Meta description={'بالاترین نرخ ' + currency.TR.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.TR.l + ' ریال'}/>
                    </Space>
               </Skeleton>
              </Card>
          </Flex>
    )
}