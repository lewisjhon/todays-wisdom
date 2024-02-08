import {metadata} from "@/app/layout";

const Header = () => {
    return (
        <div className="absolute inset-x-0 flex justify-center items-center text-center h-[5rem]">
            <section className="flex-col text-center">
                {metadata.title?.toString()}
                <h1>
                    {metadata.description?.toString()}
                </h1>
            </section>
        </div>
    );
}

export default Header;