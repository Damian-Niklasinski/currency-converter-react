import { Paragraph, Strong} from "./styled";

export const Result = ({ result }) => (
    <Paragraph>
        Kwota po przeliczeniu:
        {result !== undefined && (
            <Strong>
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </Strong>
        )}
    </Paragraph>
);

