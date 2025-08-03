costumes "blank.svg";

%include inflator/assert
%include inflator/string

onflag {
    assert_eq uppercase("test..?"), "TEST..?", "uppercase";
}
