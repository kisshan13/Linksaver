import Heading from "../ui/Heading";

import { cn } from "@/lib/utils";

export default function Slogan({ className }: { className?: string }) {

    const slogans = [
        'Create.', 'Collect.', 'Share.', 'Manage.'
    ]

    return (
        <div className={cn(["flex flex-wrap items-center justify-around", className])}


        >
            {
                slogans.map(s => (
                    <Heading className=" font-bold my-3 transition-all opacity-40 hover:text-pink hover:opacity-100">
                        {s}
                    </Heading>
                ))
            }
        </div>
    )
}