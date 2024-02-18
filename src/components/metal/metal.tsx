import {Avatar, Card, Flex, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
const { Meta } = Card;
interface TypeContract {
    mesghal : {
        p:number
        h:number
        l:number
        dt:string
    },
    tamam : {
        p:number
        h:number
        l:number
        dt:string
    },
    nim : {
        p:number
        h:number
        l:number
        dt:string

    },
    rob : {
        p:number
        h:number
        l:number
        dt:string
    },
    gold18 : {
        p:number
        h:number
        l:number
        dt:string
    },
    gold24 : {
        p:number
        h:number
        l:number
        dt:string
    }
}
export const Metal = () => {
    const [loading, setLoading] = useState(true);

    const [currency, setCurrency] = useState<TypeContract>({
        mesghal : { p : 0, h : 0, l : 0,dt:''},
        tamam : { p : 0, h : 0, l : 0,dt:''},
        nim : { p : 0, h : 0, l : 0,dt:''},
        rob : { p : 0, h : 0, l : 0,dt:''},
        gold18 : { p : 0, h : 0, l : 0,dt:''},
        gold24 : { p : 0, h : 0, l : 0,dt:''},
    })
    const currenciesList = ['retail_sekeb', 'retail_nim', 'retail_rob','mesghal','geram18','geram24']

    const fetchData = async () => {
        currenciesList.map(async (value) => {
            await axios.get(`https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${value}/latest.json`).then(response => {
                return response
            }).then(async data => {
                if (value === 'mesghal'){
                  setCurrency( prevState  => ({ ...prevState,   mesghal : data.data }));
                }else if (value === 'retail_rob'){
                  setCurrency( prevState  => ({ ...prevState,   rob : data.data }));
                }else if (value === 'retail_nim'){
                  setCurrency( prevState  => ({ ...prevState,   nim : data.data }));
                }else if (value === 'retail_sekeb'){
                  setCurrency( prevState  => ({ ...prevState,   tamam : data.data }));
                }else if (value === 'geram18'){
                  setCurrency( prevState  => ({ ...prevState,   gold18 : data.data }));
                }else if (value === 'geram24'){
                  setCurrency( prevState  => ({ ...prevState,   gold24 : data.data }));
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
                className={currency.mesghal.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                 <Skeleton loading={loading} avatar active>
                       <Meta avatar={<Avatar className='bg-gold bg-cover bg-center' />} title='مثقال طلا'/>
                       <Space className='mt-5' direction="vertical" size={10} >
                            <Meta className='font-bold' description={'نرخ روز ' + currency.mesghal.p + ' ریال'}/>
                            <Meta description={'بالاترین نرخ ' + currency.mesghal.h + ' ریال'}/>
                            <Meta description={'پایین ترین نرخ ' + currency.mesghal.l + ' ریال'}/>
                       </Space>
                 </Skeleton>
             </Card>
             <Card
                 loading={loading}
                hoverable
                className={currency.gold18.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
               <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar className='bg-gold bg-cover bg-center' />} title='طلای 18 عیار'/>
                       <Space className='mt-5' direction="vertical" size={10} >
                        <Meta className='font-bold' description={'نرخ روز ' + currency.gold18.p + ' ریال'}/>
                        <Meta description={'بالاترین نرخ ' + currency.gold18.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.gold18.l + ' ریال'}/>
                      </Space>
               </Skeleton>
              </Card>
             <Card
                 loading={loading}
                hoverable
                className={currency.gold24.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                  <Skeleton loading={loading} avatar active>
                      <Meta avatar={<Avatar className='bg-gold bg-cover bg-center' />} title='طلای 24 عیار'/>
                       <Space className='mt-5' direction="vertical" size={10} >
                        <Meta className='font-bold' description={'نرخ روز ' + currency.gold24.p + ' ریال'}/>
                        <Meta description={'بالاترین نرخ ' + currency.gold24.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.gold24.l + ' ریال'}/>
                      </Space>
                  </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.tamam.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar className='bg-coin bg-cover bg-center' />} title='سکه بهار آزادی'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.tamam.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.tamam.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.tamam.l + ' ریال'}/>
                  </Space>
                </Skeleton>
              </Card>
             <Card
                loading={loading}
                hoverable
                className={currency.nim.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                    <Meta avatar={<Avatar className='bg-coin bg-cover' />} title='نیم سکه بهار آزادی'/>
                    <Space className='mt-5' direction="vertical" size={10} >
                        <Meta description={<p>نرخ روز   {currency.nim.p}   ریال</p>}/>
                        <Meta description={'بالاترین نرخ ' + currency.nim.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.nim.l + ' ریال'}/>
                    </Space>
                </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.rob.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                <Meta avatar={<Avatar className='bg-coin bg-cover bg-center' />} title='ربع سکه بهار آزادی'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.rob.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.rob.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.rob.l + ' ریال'}/>
                  </Space>
                </Skeleton>
              </Card>
          </Flex>
    )
}