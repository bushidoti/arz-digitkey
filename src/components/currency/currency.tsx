import {Avatar, Card, Flex, Skeleton, Space} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";



const { Meta } = Card;
interface TypeCurrencySub {
    p:number
    h:number
    l:number
    dt:string
}
interface TypeCurrency {
    [key: string] : TypeCurrencySub,
}

interface TypeCurrencyName {
    [key: string] : string,
}

export const Currency = () => {
    const [loading, setLoading] = useState(true);

    const [currency, setCurrency] = useState<TypeCurrency>({
        price_dollar_rl : { p : 0, h : 0, l : 0,dt:''},
        price_eur : { p : 0, h : 0, l : 0,dt:''},
        price_try  :  { p : 0, h : 0, l : 0,dt:''},
        price_gbp : { p : 0, h : 0, l : 0,dt:''},
        price_aed : { p : 0, h : 0, l : 0,dt:''},
        price_chf : { p : 0, h : 0, l : 0,dt:''},
        price_cny : { p : 0, h : 0, l : 0,dt:''},
        price_jpy : { p : 0, h : 0, l : 0,dt:''},
        price_krw : { p : 0, h : 0, l : 0,dt:''},
        price_cad : { p : 0, h : 0, l : 0,dt:''},
        price_aud : { p : 0, h : 0, l : 0,dt:''},
        price_nzd : { p : 0, h : 0, l : 0,dt:''},
        price_sgd : { p : 0, h : 0, l : 0,dt:''},
        price_inr : { p : 0, h : 0, l : 0,dt:''},
        price_pkr : { p : 0, h : 0, l : 0,dt:''},
        price_iqd : { p : 0, h : 0, l : 0,dt:''},
        price_syp : { p : 0, h : 0, l : 0,dt:''},
        price_afn : { p : 0, h : 0, l : 0,dt:''},
        price_dkk : { p : 0, h : 0, l : 0,dt:''},
        price_sek : { p : 0, h : 0, l : 0,dt:''},
        price_nok : { p : 0, h : 0, l : 0,dt:''},
        price_sar : { p : 0, h : 0, l : 0,dt:''},
        price_qar : { p : 0, h : 0, l : 0,dt:''},
        price_omr : { p : 0, h : 0, l : 0,dt:''},
        price_kwd : { p : 0, h : 0, l : 0,dt:''},
        price_bhd : { p : 0, h : 0, l : 0,dt:''},
        price_myr : { p : 0, h : 0, l : 0,dt:''},
        price_thb : { p : 0, h : 0, l : 0,dt:''},
        price_hkd : { p : 0, h : 0, l : 0,dt:''},
        price_rub : { p : 0, h : 0, l : 0,dt:''},
        price_azn : { p : 0, h : 0, l : 0,dt:''},
        price_amd : { p : 0, h : 0, l : 0,dt:''},
        price_gel : { p : 0, h : 0, l : 0,dt:''},
        price_kgs : { p : 0, h : 0, l : 0,dt:''},
        price_tjs : { p : 0, h : 0, l : 0,dt:''},
        price_tmt : { p : 0, h : 0, l : 0,dt:''},
    })
    const currenciesList = ['price_dollar_rl', 'price_eur', 'price_gbp',
        'price_try','price_aed','price_chf','price_cny','price_jpy','price_krw',
        'price_cad','price_aud','price_nzd','price_sgd','price_inr','price_pkr',
        'price_iqd','price_syp','price_afn','price_dkk','price_sek','price_nok',
        'price_sar','price_qar','price_omr','price_kwd','price_bhd','price_myr',
        'price_thb','price_hkd','price_rub','price_azn','price_amd','price_gel',
        'price_kgs','price_tjs','price_tmt']

    const Flag = (flag: string) => {
        if (flag === 'price_dollar_rl'){
            return "bg-[url('/src/assets/US.svg')]"
        }else if (flag === 'price_eur'){
            return "bg-[url('/src/assets/Europe.svg')]"
        }else if (flag === 'price_gbp'){
            return "bg-[url('/src/assets/UK.svg')]"
        }else if (flag === 'price_try'){
            return "bg-[url('/src/assets/TR.svg')]"
        }else if (flag === 'price_aed'){
            return "bg-[url('/src/assets/AED.svg')]"
        }else if (flag === 'price_chf'){
            return "bg-[url('/src/assets/CHF.svg')]"
        }else if (flag === 'price_cny'){
            return "bg-[url('/src/assets/CNY.svg')]"
        }else if (flag === 'price_jpy'){
            return "bg-[url('/src/assets/JPY.svg')]"
        }else if (flag === 'price_krw'){
            return "bg-[url('/src/assets/KRW.svg')]"
        }else if (flag === 'price_cad'){
            return "bg-[url('/src/assets/CAD.svg')]"
        }else if (flag === 'price_aud'){
            return "bg-[url('/src/assets/AUD.svg')]"
        }else if (flag === 'price_nzd'){
            return "bg-[url('/src/assets/NZD.svg')]"
        }else if (flag === 'price_sgd'){
            return "bg-[url('/src/assets/SGD.svg')]"
        }else if (flag === 'price_inr'){
            return "bg-[url('/src/assets/INR.svg')]"
        }else if (flag === 'price_pkr'){
            return "bg-[url('/src/assets/PKR.svg')]"
        }else if (flag === 'price_iqd'){
            return "bg-[url('/src/assets/IQD.svg')]"
        }else if (flag === 'price_syp'){
            return "bg-[url('/src/assets/SYP.svg')]"
        }else if (flag === 'price_afn'){
            return "bg-[url('/src/assets/AFN.svg')]"
        }else if (flag === 'price_dkk'){
            return "bg-[url('/src/assets/DKK.svg')]"
        }else if (flag === 'price_sek'){
            return "bg-[url('/src/assets/SEK.svg')]"
        }else if (flag === 'price_nok'){
            return "bg-[url('/src/assets/NOK.svg')]"
        }else if (flag === 'price_sar'){
            return "bg-[url('/src/assets/SAR.svg')]"
        }else if (flag === 'price_qar'){
            return "bg-[url('/src/assets/QAR.svg')]"
        }else if (flag === 'price_omr'){
            return "bg-[url('/src/assets/OMR.svg')]"
        }else if (flag === 'price_kwd'){
            return "bg-[url('/src/assets/KWD.svg')]"
        }else if (flag === 'price_bhd'){
            return "bg-[url('/src/assets/BHD.svg')]"
        }else if (flag === 'price_myr'){
            return "bg-[url('/src/assets/MYR.svg')]"
        }else if (flag === 'price_thb'){
            return "bg-[url('/src/assets/THB.svg')]"
        }else if (flag === 'price_hkd'){
            return "bg-[url('/src/assets/HKD.svg')]"
        }else if (flag === 'price_rub'){
            return "bg-[url('/src/assets/RUB.svg')]"
        }else if (flag === 'price_azn'){
            return "bg-[url('/src/assets/AZN.svg')]"
        }else if (flag === 'price_amd'){
            return "bg-[url('/src/assets/AMD.svg')]"
        }else if (flag === 'price_gel'){
            return "bg-[url('/src/assets/GEL.svg')]"
        }else if (flag === 'price_kgs'){
            return "bg-[url('/src/assets/KGS.svg')]"
        }else if (flag === 'price_tjs'){
            return "bg-[url('/src/assets/TJS.svg')]"
        }else if (flag === 'price_tmt'){
            return "bg-[url('/src/assets/TMT.svg')]"
        }
    }

    const CurrencyNameList : TypeCurrencyName = {
        'price_dollar_rl':'دلار آمریکا',
        'price_eur':'یورو',
        'price_gbp':'پوند انگلیس',
        'price_try':'لیر ترکیه',
        'price_aed':'درهم امارات',
        'price_chf':'فرانک سوئیس',
        'price_cny':'یوان چین',
        'price_jpy':'ین ژاپن (100 ین)',
        'price_krw':'وون کره جنوبی',
        'price_cad':'دلار کانادا',
        'price_aud':'دلار استرالیا',
        'price_nzd':'دلار نیوزیلند',
        'price_sgd':'دلار سنگاپور',
        'price_inr':'روپیه هند',
        'price_pkr':'روپیه پاکستان',
        'price_iqd':'دینار عراق',
        'price_syp':'پوند سوریه',
        'price_afn':'افغانی',
        'price_dkk':'کرون دانمارک',
        'price_sek':'کرون سوئد',
        'price_nok':'کرون نروژ',
        'price_sar':'ریال عربستان',
        'price_qar':'ریال قطر',
        'price_omr':'ریال عمان',
        'price_kwd':'دینار کویت',
        'price_bhd':'دینار بحرین',
        'price_myr':'رینگیت مالزی',
        'price_thb':'بات تایلند',
        'price_hkd':'دلار هنگ کنگ',
        'price_rub':'روبل روسیه',
        'price_azn':'منات آذربایجان',
        'price_amd':'درام ارمنستان',
        'price_gel':'لاری گرجستان',
        'price_kgs':'سوم قرقیزستان',
        'price_tjs':'سامانی تاجیکستان',
        'price_tmt':'منات ترکمنستان',
    }
    const CurrencyName = (flag: string) => {
      return CurrencyNameList[flag]
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

    useEffect(() => {
            void fetchData()
            setInterval(fetchData, 250000)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
         <Flex className='justify-center' wrap="wrap" gap="small">
             {currenciesList.map((value,i) => (
                 <Card
                    key={i}
                    hoverable
                    loading={loading}
                    className={currency[value]?.dt === 'high' ? 'bg-green-200' : 'bg-red-200'}
                    style={{ width: 250 }}>
                        <Skeleton loading={loading} avatar active>
                          <Meta avatar={<Avatar className={`${Flag(value)} bg-center bg-cover`} />} title={CurrencyName(value)} key={i}/>
                            <Space className='mt-5' direction="vertical" size={10}>
                                <p className='font-bold'>{'نرخ روز ' + currency[value]?.p + ' ریال'}</p>
                                <p>{'بالاترین نرخ ' + currency[value]?.h + ' ریال'}</p>
                                <p>{'پایین ترین نرخ ' + currency[value]?.l + ' ریال'}</p>
                            </Space>
                        </Skeleton>
                 </Card>
             ))}
         </Flex>
    )
}