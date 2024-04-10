import { Box, CardBody, CardHeader, Heading, List, Stack, StackDivider } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../redux/store";

export function MatchList() {
  const match = useSelector((state: IRootState) => state.match);
  const user = useSelector((state: IRootState) => state.user);
  const navigate = useNavigate();
  
  console.log(match);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {match.matches.map((e) => (
        <Card>
          <Heading>Match List</Heading>
          <CardHeader>
            <Heading size="md">
              {e.title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
            </Stack>
          </CardBody>
        </Card>
      ))}
    </List>
  );
};