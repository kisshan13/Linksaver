import { textStyles, textStylesProps } from "./text";

interface AnchorProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
    variant: `${NonNullable<textStylesProps['font']>}/${NonNullable<textStylesProps['size']>}`
    color?: `${NonNullable<textStylesProps['color']>}`
}

export default function Anchor({ variant, color = 'black', children, className, ...props }: AnchorProps) {

    const [font, size] = variant.split('/') as [textStylesProps['font'], textStylesProps['size']]

    return (
        <a className={textStyles({ font, size, color, className })} {...props}>
            {children}
        </a>
    )
}