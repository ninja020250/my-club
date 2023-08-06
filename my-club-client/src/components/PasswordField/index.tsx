import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { Eye, EyeSlash } from 'iconsax-react';

export const PasswordField = forwardRef<
  HTMLInputElement,
  { inputProps?: InputProps; children?: React.ReactNode }
>((props, ref) => {
  const { inputProps = {} } = props;
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <InputGroup>
      <InputRightElement>
        <IconButton
          variant="text"
          aria-label={isOpen ? 'Mask password' : 'Reveal password'}
          icon={isOpen ? <EyeSlash /> : <Eye />}
          onClick={onClickReveal}
        />
      </InputRightElement>
      <Input
        id="password"
        ref={mergeRef}
        name="password"
        type={isOpen ? 'text' : 'password'}
        autoComplete="current-password"
        {...inputProps}
      />
    </InputGroup>
  );
});

PasswordField.displayName = 'PasswordField';

export default PasswordField;
