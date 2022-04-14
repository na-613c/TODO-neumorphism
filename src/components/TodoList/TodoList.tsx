import React, { memo, FC } from "react";
import { Card, ListItem, ListItemGroup } from "ui-neumorphism";
import { ItemType } from "../../types";

type Props = {
  list: ItemType[];
  setActive: (action: number) => void;
};

const TodoList: FC<Props> = ({ list, setActive }) => {

  let listItems = list.map((l, i) => {
    return (
      <ListItem
        key={i}
        link
        active
        rounded={false}
        title={l.title}
        subtitle={l.content}
      />
    );
  });
  return (
    <Card
      rounded
      width={400}
      height={720}
      className="d-flex align-center mx-8 p-relative pa-6 my-4 flex-wrap"
    >
      <ListItemGroup
        link
        style={{ overflowY: "auto", height: 672 }}
        onChange={({ active }: { active: number }) => setActive(active)}
      >
        {listItems}
      </ListItemGroup>
    </Card>
  );
};

export default memo(TodoList);
