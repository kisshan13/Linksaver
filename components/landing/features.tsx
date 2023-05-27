'use client'

import createPng from '@/public/landing/cards/create.png'
import collectPng from '@/public/landing/cards/collect.png'
import managePng from '@/public/landing/cards/manage.png'
import Card, { CardProps } from './Card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Features({ className }: { className?: string }) {


    const cardInfo: CardProps[] = [
        {
            image: createPng,
            heading: 'Create',
            text: 'Create collections for saving your links.',
            buttonText: 'Create your profile'
        },

        {
            image: managePng,
            heading: 'Manage',
            text: 'manage all of your saved links at one place...',
            buttonText: 'Manage your links'
        },

        {
            image: collectPng,
            heading: 'Collect',
            text: 'Explore communities and collect some cool links out there...',
            buttonText: 'Popular Communities'
        }
    ]

    return (
        <div className={cn([' flex flex-wrap items-center justify-around', className])}>
            {
                cardInfo.map(info => (
                    <motion.div
                        initial={{ y: 300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'anticipate' }}>
                        <Card
                            key={info.text}
                            className=' my-8'
                            image={info.image}
                            heading={info.heading}
                            text={info.text}
                            buttonText={info.buttonText}
                        />
                    </motion.div>
                ))
            }
        </div>
    )
}