import { Text } from "@components/Text";


export const MainView = () => {
    return (
        <>
            <div className="container h-screen px-32 flex items-center">
                <div className="w-1/2 flex-col">
                <Text weigth="semibold" color="primary-300" size="text-2xl" >Hi there!</Text>
                <Text weigth="bold" color="primary" size="text-6xl" >I'm Margo</Text>
                <Text weigth="semibold" color="primary-300" size="text-2xl" >junior front-end developer</Text>
                <Text weigth="normal" color="text-dark" size="text-xl" >I love creating beautiful, responsive, user-friendly websites and web applications using modern front-end technologies.</Text>
                </div>
            </div>
        </>
    );
}
