package cat.tech4good.team3.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PersonalException extends Exception {

    private static final long serialVersionUID = 1L;

    public String AttributeException(String message) {
        return message;
    }
}
