import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing, type Locale} from '../../lib/routing';
import '../globals.css';

export function generateStaticParams(){return routing.locales.map(locale=>({locale}));}
export const metadata: Metadata = {title:{default:'Ideal Point Electric | Vancouver Electrical Contractor',template:'%s | Ideal Point Electric'},description:'Licensed electrical contractor serving luxury residential, commercial and multifamily projects across Vancouver and the North Shore.',metadataBase:new URL('https://www.idealpointelectric.ca'),alternates:{canonical:'/'},robots:{index:true,follow:true}};

export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:Locale}>}){
 const {locale}=await params; setRequestLocale(locale); const messages=await getMessages();
 return <html lang={locale}><body><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body></html>;
}
