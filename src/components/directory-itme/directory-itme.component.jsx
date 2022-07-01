import { useNavigate } from "react-router-dom";

import {
  BackgroungImage,
  Body,
  DirectoryContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroungImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
