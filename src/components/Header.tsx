import {metadata} from "@/app/layout";

const Header = () => {
    return (
        <div className="absolute inset-x-0 flex justify-center items-center text-center h-[5rem]">
            <section className="flex-col text-center">
                <p className="text-lg font-bold">
                    {metadata.title?.toString()}
                </p>
                <p className="text-xs">
                    {metadata.description?.toString()}
                </p>
            </section>
        </div>
    );
}

export default Header;