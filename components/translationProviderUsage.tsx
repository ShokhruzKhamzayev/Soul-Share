import initTranslations from '@/app/i18n'
import React from 'react'
import TranslationsProvider from './translationProvider'
import LanguageChanger from './langChanger'

export default async function TranslationProviderUsage({ locale }: {
    locale: string
}) {
    const { t, resources } = await initTranslations(locale, ['nav'])
    return (
        <TranslationsProvider locale={locale} namespaces={['nav']} resources={resources}>
            <LanguageChanger />
        </TranslationsProvider>
    )
}
