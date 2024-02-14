import { metadata } from "@/app/layout";

const Header = () => {
    return (
        <div className="fixed inset-x-0 flex h-[4rem] items-center justify-center bg-white bg-opacity-20 text-center">
            <section className="flex-col text-center">
                <p className="text-lg font-bold">
                    {metadata.title?.toString()}
                </p>
                <p className="text-xs">{metadata.description?.toString()}</p>
            </section>
        </div>
    );
};

export default Header;
