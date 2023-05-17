import { cva, VariantProps } from "cva";

export const textStyles = cva([], {
    variants: {
        font: {
            saver: 'font-saver'
        },

        size: {
            small: 'text-xs',
            base: 'text-base',
            normal: 'text-xl',
            medium: 'text-2xl',
            big: 'text-3xl',
            large: 'text-4xl',
            vlarge: 'text-5xl'
        },

        color: {
            black: 'text-black',
            white: 'text-white',
            main: 'text-pink'
        }
    }
})

export type textStylesProps = VariantProps<typeof textStyles>

export interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    variant?: `${NonNullable<textStylesProps['font']>}/${NonNullable<textStylesProps['size']>}`
    color?: `${NonNullable<textStylesProps['color']>}`
}

export default function Text({ variant='saver/normal', color = 'white', children, className, ...props }: TextProps) {

    const [font, size] = variant.split('/') as [textStylesProps['font'], textStylesProps['size']]

    return (
        <p className={textStyles({ font, size, color, className })} {...props}>
            {children}
        </p>
    )
}
