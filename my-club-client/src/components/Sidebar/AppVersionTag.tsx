import { Collapse, Stack, Text } from '@chakra-ui/react';

export default function AppVersionTag({ show, appVersion = '' }: any) {
  return (
    <Collapse in={show} animateOpacity>
      <Stack
        direction="row"
        align="center"
        justify="center"
        p="6"
        w="full"
        position="absolute"
        bottom="0"
      >
        <Text textStyle="sm" color="fg.muted" whiteSpace="nowrap">
          App Version:
        </Text>
        <Text size="sm" whiteSpace="nowrap">
          v{appVersion}
        </Text>
      </Stack>
    </Collapse>
  );
}
