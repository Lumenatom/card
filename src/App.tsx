
import Card from "./components/Card/Card.tsx";
import { FC } from "react";
import { MainBlock } from "./styled.ts";

const App: FC = () => {
    return (
        <MainBlock color={'grey'}>
            <Card color={'grey'} />
        </MainBlock>
    )
}

export default App
