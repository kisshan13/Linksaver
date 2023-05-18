import createPng from '@/public/landing/cards/create.png'
import collectPng from '@/public/landing/cards/collect.png'
import managePng from '@/public/landing/cards/manage.png'
import Card, { CardProps } from './card'

export default function Features() {


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
        <div className=' flex flex-wrap items-center justify-around'>
            {
                cardInfo.map(info => (
                    <Card
                        image={info.image}
                        heading={info.heading}
                        text={info.text}
                        buttonText={info.buttonText}
                    />
                ))
            }
        </div>
    )
}