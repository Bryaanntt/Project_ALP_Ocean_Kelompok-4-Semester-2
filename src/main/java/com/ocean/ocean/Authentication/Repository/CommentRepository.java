package com.ocean.ocean.Authentication.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ocean.ocean.Authentication.Model.Comment;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> showCommentByModuleIdOrderByCreatedAtDesc(Long moduleId);
}
