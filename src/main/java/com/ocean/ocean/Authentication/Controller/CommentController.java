package com.ocean.ocean.Authentication.Controller;

import com.ocean.ocean.Authentication.Model.Comment;
import com.ocean.ocean.Authentication.Service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{moduleId}")
    public ResponseEntity<?> getComments(@PathVariable Long moduleId) {
        List<Comment> comments = commentService.getCommentsByModule(moduleId);

        List<Map<String, String>> response = comments.stream()
            .map(c -> Map.of(
                "username",  c.getUser().getUsername(),
                "content",   c.getContent(),
                "createdAt", c.getCreatedAt()
                    .format(DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm"))
            ))
            .collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{moduleId}")
    public ResponseEntity<?> addComment(@PathVariable Long moduleId,
                                        @RequestBody Map<String, String> body) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            String content = body.get("content");
            Comment comment = commentService.addComment(moduleId, username, content);

            return ResponseEntity.ok(Map.of(
                "username",  comment.getUser().getUsername(),
                "content",   comment.getContent(),
                "createdAt", comment.getCreatedAt()
                    .format(DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm"))
            ));

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}