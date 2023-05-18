import { FC, useState } from "react";
import { CardContent, WrapperCard } from "./styled.ts";
import { CardItem } from "../../types/types.ts";
import { LineBlocks, CardItemValue, ControlPanelButtons } from "../../styled.ts";
import { AiFillMinusCircle, IoAddCircleSharp } from "react-icons/all";
import useGeneratorColor from "../../hooks/useGeneratorColor.ts";
import { uid } from "uid";

type Props = {
    color: string;
}
const Card: FC<Props> = ({color}) => {
    const [cards, setCards] = useState<CardItem[]>([])
    const [value, setValue] = useState<string>('')
    const {getColorCard} = useGeneratorColor()

    const addCard = () => {
        setCards([...cards, {
                id: uid(),
                color: getColorCard()
            }]
        )
    }

    return (
        <WrapperCard>
            <CardContent>
                <CardItemValue color={color}>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <ControlPanelButtons>
                        <button className='addBtn' onClick={addCard}>
                            <IoAddCircleSharp/>
                        </button>
                        <button className='delBtn' ><AiFillMinusCircle/></button>
                    </ControlPanelButtons>
                </CardItemValue>
                <LineBlocks>
                    {
                        cards?.map((card) => (
                            <Card key={card.id} color={card.color}  />
                        ))
                    }
                </LineBlocks>
            </CardContent>

        </WrapperCard>
    )
}
export default Card