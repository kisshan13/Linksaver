import { cn } from "@/lib/utils";
import { textStyles, textStylesProps } from "./Text"

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
    variants?: `${NonNullable<textStylesProps['font']>}/${NonNullable<textStylesProps['size']>}`,
    color?: NonNullable<textStylesProps['color']>
    heading?: HeadingType,
    className?: string
}

export default function Heading({ variants = 'saver/large', color = 'white', heading = 'h1', children, className, ...props }: HeadingProps) {

    const [font, size] = variants.split('/') as [textStylesProps['font'], textStylesProps['size']]

    switch (heading) {
        case "h1":
            return (
                <h1 className={textStyles({ font, size, color, className })} {...props}>
                    {children}
                </h1>
            )

        case "h2":
            return (
                <h2 className={textStyles({ font, size, color, className })} {...props}>
                    {children}
                </h2>
            )

        default:
            return (<>{children}</>)
    }
}