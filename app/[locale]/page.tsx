import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import Site from '../../components/Site';
import {routing, type Locale} from '../../lib/routing';

export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}):Promise<Metadata>{
 const {locale}=await params; const t=await getTranslations({locale,namespace:'hero'});
 return {title:'Ideal Point Electric | Vancouver Electrical Contractor',description:t('description'),alternates:{canonical:`/${locale}`},openGraph:{title:'Ideal Point Electric',description:t('description'),type:'website',locale}};
}
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;setRequestLocale(locale);return <><Site/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Electrician","name":"Ideal Point Electric","url":"https://www.idealpointelectric.ca","telephone":"+1-604-309-1234","areaServed":["Vancouver","West Vancouver","North Vancouver","Burnaby","Richmond","Coquitlam"],"address":{"@type":"PostalAddress","addressLocality":"West Vancouver","addressRegion":"BC","addressCountry":"CA"},"serviceType":["Residential electrical contracting","Commercial electrical contracting","Multifamily electrical contracting"]})}} /></>}
