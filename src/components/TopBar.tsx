import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useDispatch } from 'react-redux';
import { getTodos } from "../store/actions";

const url: string = "";

function TopBar() {
  const dispatch = useDispatch();
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button
        onClick={() =>
        dispatch(
          getTodos(
            url
            )
          )
        }
      >
        Load
      </Button>
    </Grid>
  );
}

export default TopBar;