import { Link } from "react-router-dom";
import { pages } from "../static/pages";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 180px;
  height: 100vh;
  /* background-color: green; */
  display: flex;
  border-right: 1px solid lightgray;
`;

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
`;

const ListStyle = styled.li`
  width: 180px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 0 20px;

  & :hover {
    color: lightseagreen;
  }
`;

const Sidebar = () => {
  const arrExceptForHomepages = pages.slice(1);

  return (
    <SidebarWrapper>
      <ListWrapper>
        {arrExceptForHomepages.map((page) => (
          <ListStyle key={page.id}>
            <Link to={`/${page.router}`}>{page.name}</Link>
          </ListStyle>
        ))}
        {/* <Link to="/pageA">
          <li>PageA</li>
        </Link>
        <Link to="/pageB">
          <li>PageB</li>
        </Link>
        <Link to="/pageC">
          <li>PageC</li>
        </Link> */}
      </ListWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
