import { cva, VariantProps } from 'cva'

const buttonStyles = cva(['outline outline-1 transition-all active:shadow active:outline-2 px-4 py-2 rounded-md disabled:cursor-not-allowed'], {
    variants: {
        intents: {
            filled: [
                'bg-pink text-black shadow-3xl font-saver'
            ],

            outlin: [
                'bg-black text-white'
            ]
        }
    }
})

type buttonStylesProps = VariantProps<typeof buttonStyles>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variants: `${NonNullable<buttonStylesProps['intents']>}`,
}

export default function Button({ variants, className, children, ...props }: ButtonProps) {
    return (
        <button className={buttonStyles({ intents: variants, className })} {...props}>
            {children}
        </button>
    )
}
