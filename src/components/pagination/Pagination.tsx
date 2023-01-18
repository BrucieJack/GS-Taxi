import { ActivePage, Page, PaginationBox } from "./style";

interface IPagination {
  page: number;
  handleClick(newPage: number): void;
}

export const Pagination = (props: IPagination) => {
  return (
    <PaginationBox>
      {props.page > 3 && (
        <Page onClick={() => props.handleClick(props.page - 3)}>
          {props.page - 3}
        </Page>
      )}
      {props.page > 2 && (
        <Page onClick={() => props.handleClick(props.page - 2)}>
          {props.page - 2}
        </Page>
      )}
      {props.page > 1 && (
        <Page onClick={() => props.handleClick(props.page - 1)}>
          {props.page - 1}
        </Page>
      )}
      <ActivePage>{props.page}</ActivePage>
      <Page onClick={() => props.handleClick(props.page + 1)}>
        {props.page + 1}
      </Page>
      <Page onClick={() => props.handleClick(props.page + 2)}>
        {props.page + 2}
      </Page>
      <Page onClick={() => props.handleClick(props.page + 3)}>
        {props.page + 3}
      </Page>
      {props.page < 4 && (
        <Page onClick={() => props.handleClick(props.page + 4)}>
          {props.page + 4}
        </Page>
      )}
      {props.page < 3 && (
        <Page onClick={() => props.handleClick(props.page + 5)}>
          {props.page + 5}
        </Page>
      )}
      {props.page < 2 && (
        <Page onClick={() => props.handleClick(props.page + 6)}>
          {props.page + 6}
        </Page>
      )}
    </PaginationBox>
  );
};