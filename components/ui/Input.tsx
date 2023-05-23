import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ className, ...props }: InputProps) {
    return (
        <input
            {...props}
            className={cn(
                ['border-solid border-2 outline-2 px-2 py-1 border-opacity-50 rounded-md border-white text-white focus-visible:border-opacity-0 font-saver text-xl focus-visible:outline-pink bg-black transition-all', className])} />
    )
}