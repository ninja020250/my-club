import InternalCard from './ICard';
import ICardBody from './ICardBody';
import ICardFooter from './ICardFooter';
import ICardHeader from './ICardHeader';

type InternalCardType = typeof InternalCard;

export interface CardInterface extends InternalCardType {
  Header: typeof ICardHeader;
  Body: typeof ICardBody;
  Footer: typeof ICardFooter;
}

const ICard = InternalCard as CardInterface;

ICard.Header = ICardHeader;
ICard.Body = ICardBody;
ICard.Footer = ICardFooter;

export default ICard;
