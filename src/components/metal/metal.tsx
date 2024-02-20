import {Avatar, Card, Flex, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
const { Meta } = Card;

interface TypeSub {
    p:number
    h:number
    l:number
    dt:string
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

    const fetchData = async () => {
        currenciesList.map(async (value) => {
            await axios.get(`https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/${value}/latest.json`).then(response => {
                return response
            }).then(async data => {
                setCurrency( prevState  => ({ ...prevState,   [value] : data.data }));
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
                className={currency.geram18.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
               <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar className='bg-gold bg-cover bg-center' />} title='طلای 18 عیار'/>
                       <Space className='mt-5' direction="vertical" size={10} >
                        <Meta className='font-bold' description={'نرخ روز ' + currency.geram18.p + ' ریال'}/>
                        <Meta description={'بالاترین نرخ ' + currency.geram18.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.geram18.l + ' ریال'}/>
                      </Space>
               </Skeleton>
              </Card>
             <Card
                 loading={loading}
                hoverable
                className={currency.geram24.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                  <Skeleton loading={loading} avatar active>
                      <Meta avatar={<Avatar className='bg-gold bg-cover bg-center' />} title='طلای 24 عیار'/>
                       <Space className='mt-5' direction="vertical" size={10} >
                        <Meta className='font-bold' description={'نرخ روز ' + currency.geram24.p + ' ریال'}/>
                        <Meta description={'بالاترین نرخ ' + currency.geram24.h + ' ریال'}/>
                        <Meta description={'پایین ترین نرخ ' + currency.geram24.l + ' ریال'}/>
                      </Space>
                  </Skeleton>
              </Card>
              <Card
                loading={loading}
                hoverable
                className={currency.sekeb.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar className='bg-coin bg-cover bg-center' />} title='سکه بهار آزادی'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.sekeb.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.sekeb.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.sekeb.l + ' ریال'}/>
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
             <Card
                loading={loading}
                hoverable
                className={currency.sekee.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                <Meta avatar={<Avatar className='bg-coin bg-cover bg-center' />} title='سکه امامی'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.sekee.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.sekee.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.sekee.l + ' ریال'}/>
                  </Space>
                </Skeleton>
              </Card>
             <Card
                loading={loading}
                hoverable
                className={currency.gerami.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                style={{ width: 250 }}
              >
                <Skeleton loading={loading} avatar active>
                <Meta avatar={<Avatar className='bg-coin bg-cover bg-center' />} title='سکه گرمی'/>
                  <Space className='mt-5' direction="vertical" size={10} >
                    <Meta description={'نرخ روز ' + currency.gerami.p + ' ریال'}/>
                    <Meta description={'بالاترین نرخ ' + currency.gerami.h + ' ریال'}/>
                    <Meta description={'پایین ترین نرخ ' + currency.gerami.l + ' ریال'}/>
                  </Space>
                </Skeleton>
              </Card>
          </Flex>
    )
}