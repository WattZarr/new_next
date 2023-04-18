import React from 'react'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import {FaLayerGroup} from 'react-icons/fa'

const About = () => {

    var slideRight = {
        distance: '20%',
        origin: 'left',
        opacity: null
    };
    
    var slideLeft = {
        distance: '20%',
        origin: 'right',
        opacity: null,
    };

    useEffect(()=>{
        ScrollReveal().reveal('.vision',slideRight)
    },[])
    
    useEffect(() => {
        ScrollReveal().reveal('.mission',slideLeft)
    },[])

  return (
        <div className='bg-white pt-32 pb-4'> 
            <div className='w-[80%] mx-auto h-full'>
                <h1 className='font-bold text-center text-3xl mb-4'>Our Vision and Mission</h1>
                <div>
                    <div className='bg-dark-blue text-white px-4 py-4 rounded-t-xl mb-2 vision text-sm tracking-wide'>
                        <h1 className='text-2xl font-bold mb-4'>Our Vision</h1>
                        <p>NNU strives to excel at the highest standard for Higher Education in the twenty-first century. We are committed to creating and sustaining the conditions that enable all Myanmar students to experience an unparalleled educational journey that is intellectually, socially, and personally transformative.
                           <br /><br />
                           NNU ကတော့ 21 ရာစုမှာ မြန်မာနိုင်ငံအတွင်းအဆင့်မြင့်ပညာရေးစနစ်တစ်ခုကို ဖော်ဆောင်နိုင်ဖို့ အင်တိုက်အားတိုက် ကြိုးပမ်းသွားမှာဖြစ်ပြီးမြန်မာနိုင်ငံ ကျောင်းသား၊ ကျောင်းသူတို့ရဲ့ ပညာရေးလမ်းခရီးမှာ အသိပညာအပြင် လူမှုဆက်ဆံရေးနဲ့ ကိုယ်ရည်ကိုယ်သွေးတိုးတက် ပြောင်းလဲမှုများပါ ရရှိစေမယ့်ပြီးပြည့်စုံတဲ့ ပညာရေးစနစ်တစ်ခုကို နည်းလမ်းအသစ်တွေနဲ့ အကောင်အထည်ဖော်သွားမှာဖြစ်ပါတယ်။</p>
                    </div>
                    <div className='bg-dark-green text-white px-4 py-4 rounded-b-xl mission text-sm'>
                        <h1 className='text-2xl font-bold mb-4'>Our Mission</h1>
                        <p>NNU is the epitome of brave and bright minds to create a community of change leaders and highly skilled professionals , NNU aims to ignite their full potentials by creating an innovative ecosystem where they can find their purpose and passion.
                        <br /><br />
                        NNU ဟာတိုးတက်ပြောင်းလဲမှုတွေကိုဖော်ဆောင်မယ့် ခေါင်းဆောင်ကောင်းတွေနဲ့အတူစွမ်းရည်မြင့်မားတဲ့ ပညာရှင်တွေစုစည်းထားတဲ့ Community တစ်ခုကိုတည်ဆောက်သွားမှာပါ။ NNU ရဲ့ Innovative Ecosystem ‌ကြောင့်လူငယ်တွေက မိမိရဲ့ စစ်မှန်တဲ့ ရည်မှန်းချက် ပန်းတိုင်နဲ့အိမ်မက်တွေကို သိရှိလာနိုင်မှာဖြစ်သလို၊ မိမိရဲ့ ပင်ကိုယ်အစွမ်းအစတွေကိုလည်း‌အကောင်းဆုံးအသုံးချနိုင်မှာဖြစ်ပါတယ်။
                        <br /><br />
                        NNU ဟာ ခေတ်သစ်ပညာရေးရဲ့ လိုအပ်မှုဖြစ်လာတဲ့သင်ယူမှုမှာ ‌ကျောင်းသား၊‌‌ကျောင်းသူများတက်ကြွစွာ ပူးပေါင်းပါဝင်စေမှုအပြင် သင်ယူမှုမှာနည်းပညာ ( Techonology ) ကိုတွင်ကျယ်စွာအသုံးပြုစေတဲ့ သင်ယူလေ့လာမှုဖြစ်အောင် ‌အကောင်အထည်ဖော်သွားမှာဖြစ် တဲ့အတွက် ဆရာ/ဆရာမများ ဝန်ထမ်းများ၊ ကျောင်းသားများအနေနဲ့ ရလဒ်တွေ စိန်ခေါ်မှုတွေပြည့်နှက်နေတဲ့ပတ်ဝန်းကျင်မှာ မိမိရဲ့စွမ်းဆောင်ရည်ကို အရှိန်အဟုန်မြင့်တင်နိုင်မှာဖြစ်ပါတယ်။</p>    
                    </div>
                </div>

                <div className='h-1 border-b-2 border-dark-green mt-8'></div>

                <div>
                    <h1 className='font-bold text-center text-3xl my-4'>Why NEW NEXT?</h1>
                    <div className='flex flex-wrap justify-between w-full mt-4'>
                        <div className='w-[47%] mb-8'>
                            <h2 className='text-dark-green font-semibold text-xl mb-2 flex items-center gap-4'><FaLayerGroup/> Starting with Passion and Purpose</h2>
                            <p>လူငယ်တွေကို ကိုယ်ဝါသနာနဲ့ ပါရမီတွေကို သိရှိခြင်းက မိမိရဲ့ အသက်မွေး ဝမ်းကြောင်းကိုမှန်ကန်စွာရွေးချယ်နိုင်ရန်အတွက်ပထမဆုံးခြေလှမ်းဖြစ်တာ ကြောင့် NNU Faculty အဖွဲ့ဝင်များက အထက်ပါအကြောင်းအ‌ရာများကို ဦး ဆောင်လမ်းညွှန်ပေးသွားမှာဖြစ်ပါတယ်။လူငယ်တွေရဲ့ ပညာရေးကိုအ ကောင်းဆုံးလက်လှမ်းမှီအောင်ကြိုးပမ်းတဲ့နေရာမှာ စိတ်အားထက်သန်တဲ့ Leader တွေရဲ့ဦးဆောင်မှုအောက်က New Next ကအမြဲတမ်းပိုကောင်းတဲ့ လမ်းကြောင်းကို ဦးတည်နေမှာသေချာပါတယ်။</p>
                        </div>
                        <div className='w-[47%] mb-8'>
                            <h2 className='text-dark-green font-semibold text-xl mb-2 flex items-center gap-4'><FaLayerGroup/> New Next Community</h2>
                            <p>New Next ဟာ စွန့်ဦးတီထွင်တဲ့ အမြင်ရှိတဲ့ ‌ခေါင်းဆောင်အတွက်ရည်ရွယ် ပါတယ်။ တီထွင်ဆန်းသစ်မှုနဲ့ စွန့်ဦးတီထွင်လိုစိတ်ဟာ New Next ရဲ့ Community ဟာဆိုရင်လူ့အဖွဲ့အစည်းတစ်ရပ်လုံး တိုးတက်လာဖို့အတွက် လက်တွေ့ဆန်တဲ့ တီထွင်ဆန်းသစ်မှုတွေကို ဖန်တီးရာနေရာတစ်ခုဖြစ်လာ မှာပါ။ အဆင့်အတန်းမြင့်မားတဲ့ အလေ့အကျင့်တွေနဲ့အတူ ကျွန်တော်တို့ရဲ့ အများနဲ့မတူညီတဲ့တွေး ခေါ်ပုံ၊ ကိုင်တွယ်ဆောင်ရွက်ပုံတွေစာ သက်ရောက် မှုကြီးမားတဲ့ တိုးတက်ပြောင်းလဲမှုတစ်ခုကိုဖော်ဆောင်ပေးမှာ ဖြစ်ပါတယ်။</p>    
                        </div>
                        <div className='w-[47%] mb-8'>
                            <h2 className='text-dark-green font-semibold text-xl mb-2 flex items-center gap-4'><FaLayerGroup/> Exceptional Teaching Methdology</h2>
                            <p>သင်ယူမှုမှာ ကျောင်းသားကျောင်းသူတွေကို တက်ကြွစွာ ပူးပေါင်းပါဝင်စေမှု ဟာ NNU ရဲ့တမူထူးခြားတဲ့ သင်ကြားမှု နည်းစနစ်တစ်ခုဖြစ်ပါတယ်။ လုပ် ငန်းခွင်ကျွမ်းကျင်တဲ့ Lecturers တွေကနေ နိုင်ငံတကာအဆင့်မီ သင်ရိုး ညွှန်းတမ်းတွေနဲ့အတူ UK နိုင်ငံအသိအမှတ်ပြု Programs တွေကို Theory + Practical ပုံစံနဲ့အတူ စနစ်တကျသင်ကြားပေးမှာဖြစ်လို့လက်တွေ့လုပ် ငန်းခွင်အတွင်း အထိရောက်ဆုံး အသုံးချနိုင်မယ့် ပညာရပ်တွေကို ပိုင်ဆိုင်‌ စေမှာဖြစ်ပါတယ်။ ဘွဲ့ရဖို့ အရေးကြီးသလို အရည်အချင်း စွမ်းရည်များ ရရှိ အောင် ပိုမိုလိုအပ်နေတဲ့ မြန်မာနိုင်ငံရဲ့ လူ့စွမ်းအားအရင်းအမြစ်ကို မြှင့်တင် ဖို့ NNU က အပြောင်းအလဲလူပ်ပြီး Industry Experts and Lecturers များ မှသင်ကြားပေးသွားမှာပါ။</p>    
                        </div>
                        <div className='w-[47%] mb-8'>
                            <h2 className='text-dark-green font-semibold text-xl mb-2 flex items-center gap-4'><FaLayerGroup/> Co-creation of projects with Corporations</h2>
                            <p>NNU ကနေ ကျောင်းသားလူငယ်တွေ ‌ကောင်းမွန်စစ်မှန်တဲ့ ပညာရေးလမ်း ခရီးကိုလျှောက်လှမ်းနိုင်ဖို့အတွက် လှပ်ငန်းရှင်များနဲ့ပူး‌ပေါင်းပြီး Real-world မှာကြုံတွေ့ရမယ့် စိန်ခေါ်မှုတွေကို ‌လေ့လာရင်း အလုပ်အကိုင်အခွင့်အလမ်း တွေ ရရှိစေမှာဖြစ်တဲ့ အပြင်ကျောင်းသားလူငယ်တွေအနေနဲ့ လက်ရှိ Company တွေ‌မှာကြုံတွေ့နေရတဲ့ ပြဿနာများစွာကို ‌ဖြေရှင်းဖို့ နည်းလမ်း တွေ အဖြေရှာရင်း စီးပွားရေးနယ်ပယ်ကို စောစီးစွာထိတွေ့မှုရရှိစေခြင်းနဲ့ မိမိသင်ယူထားတဲ့ အသိပညာ အတတ်ပညာ‌တွေကို လက်တွေ့အသုံးချနိုင်ဖို့ ရည်ရွယ်ပါတယ်။</p>    
                        </div>
                    </div>
                </div>

                <div className='my-4 bg-dark-blue px-4 pt-2 pb-4 text-sm text-white rounded-lg'>
                    <h1 className='font-bold text-center text-2xl mb-4'>Rethink Higher Education with NEW NEXT</h1>
                    <p>သင့်ဘဝရဲ့ ကောင်းမွန်တဲ့အနာဂတ်အတွက် ပြီးပြည့်စုံတဲ့ ပညာရေးလမ်းကြောင်းကို ခိုင်ခိုင်မာမာတည်ဆောက်ဖို့ NNU က အသင့်ရှိနေပါတယ်။ စဉ်ဆက်မပြတ်လေ့လာခြင်းဆိုတဲ့ Continuous Learning ပြုလုပ်နိုင်စေဖို့ NEW NEXTရဲ့ Thriving Communityမှာ ပါဝင်လိုက်ပါ။ ကိုယ့်ရဲ့ တီထွင်ဖန်တီးနိုင်စွမ်းကို အမြင့်ဆုံးထိ မြှင့်တင်လိုက်ပါ။ (၂၁)ရာစုမှာ လိုအပ်တဲ့ Skill တွေကို တည်ဆောက်လိုက်ပါ။ သမားရိုးကျ အတွေးအခေါ်တွေကနေ ရုန်းထွက်ပြီး ပြောင်းလဲမှုတစ်ခုကို ဖန်တီးလိုက်ပါ။</p>
                </div>
            </div>
        </div>
  )
}

export default About