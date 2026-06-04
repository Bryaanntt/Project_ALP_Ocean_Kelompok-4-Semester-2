package com.ocean.ocean.Authentication.Service;


import com.ocean.ocean.Authentication.Model.Comment;
import com.ocean.ocean.Module.Model.LearningModule;
import com.ocean.ocean.Authentication.Model.User;
import com.ocean.ocean.Authentication.Repository.CommentRepository;
import com.ocean.ocean.Module.Repository.ModuleRepository;
import com.ocean.ocean.Authentication.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final ModuleRepository moduleRepository;

    public CommentService(CommentRepository commentRepository, UserRepository userRepository, ModuleRepository moduleRepository) {
        this.commentRepository = commentRepository;
        this.userRepository    = userRepository;
        this.moduleRepository  = moduleRepository;
    }

    public List<Comment> getCommentsByModule(Long moduleId) {
        return commentRepository.showCommentByModuleIdOrderByCreatedAtDesc(moduleId);
    }

    public Comment addComment(Long moduleId, String username, String content) {

        if (content == null || content.trim().isEmpty()) {
            throw new RuntimeException("Komentar tidak boleh kosong.");
        }

        User user = userRepository.findUsername(username)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan."));

        LearningModule module = moduleRepository.findById(moduleId)
                .orElseThrow(() -> new RuntimeException("Modul tidak ditemukan."));

        Comment comment = new Comment();
        comment.setUser(user);
        comment.setModule(module);
        comment.setContent(content.trim());

        return commentRepository.save(comment);
    }
}
