import { cva, VariantProps } from "cva";

export const textStyles = cva([], {
    variants: {
        font: {
            saver: 'font-saver'
        },

        size: {
            small: 'text-xs',
            base: 'text-base',
            xl: 'text-xl',
            doubleXl: 'text-2xl',
            tripleXl: 'text-3xl'
        },

        color: {
            black: 'text-black',
            white: 'text-white',
            main: 'text-main'
        }
    }
})

export type textStylesProps = VariantProps<typeof textStyles>

export interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    variant: `${NonNullable<textStylesProps['font']>}/${NonNullable<textStylesProps['size']>}`
    color?: `${NonNullable<textStylesProps['color']>}`
}

export default function Text({ variant, color = 'black', children, className, ...props }: TextProps) {

    const [font, size] = variant.split('/') as [textStylesProps['font'], textStylesProps['size']]

    return (
        <p className={textStyles({ font, size, color, className })} {...props}>
            {children}
        </p>
    )
}
