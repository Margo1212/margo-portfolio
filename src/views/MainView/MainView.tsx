import { Button } from "@components/Button";
import { Text } from "@components/Text";
import MainImage from "@svg/mainimg.svg";


export const MainView = () => {
    return (
        <>
            <div className="container h-[calc(100vh-80px)] px-32 flex items-center">
                <div className="w-1/2 flex flex-col">
                    <div>
                        <Text  weigth="semibold" color="primary-300" size="text-2xl" >Hi there!</Text>
                        <Text  weigth="bold" color="primary" size="text-6xl" >I'm Margo</Text>
                        <Text  weigth="semibold" color="primary-300" size="text-2xl" >junior front-end developer</Text>
                    </div>
                    <div className="pr-40 my-10">
                    <Text  weigth="normal" color="text-dark" size="text-xl" >I love creating beautiful, responsive, user-friendly websites and web applications using modern front-end technologies.</Text>
                    </div>
                    <div className="w-full flex flex-row">
                        <Button background="filled">Contact me</Button>
                        <Button background="outline">Download CV</Button>
                    </div>
                </div>
                <div className="w-1/2 flex">
                    <MainImage />
                </div>
            </div>
        </>
    );
}
