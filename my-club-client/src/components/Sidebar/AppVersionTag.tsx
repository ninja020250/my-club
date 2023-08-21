import { Stack, Text } from '@chakra-ui/react';

export default function AppVersionTag({ show, appVersion = '' }: any) {
  return (
    <Stack direction="row" align="center" justify="center" w="full">
      <Text textStyle="sm" color="fg.muted" whiteSpace="nowrap">
        App Version:
      </Text>
      <Text size="sm" whiteSpace="nowrap">
        v{appVersion}
      </Text>
    </Stack>
  );
}
